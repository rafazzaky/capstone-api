/* eslint-disable no-underscore-dangle */
const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');
const AuthorizationError = require('../../exceptions/AuthorizationError');

class HistoryService {
  constructor() {
    this._pool = new Pool();
  }

  async verifyHistroyOwner(id, owner) {
    const query = {
      text: 'SELECT * FROM history WHERE id = $1',
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('History tidak ditemukan');
    }
    const history = result.rows[0];
    if (history.owner !== owner) {
      throw new AuthorizationError('Anda tidak berhak mengakses history ini');
    }
  }

  async addHistory({
    owner, category, result, image,
  }) {
    const id = `${owner}-${nanoid(16)}`;
    const createdAt = new Date().toISOString();

    const query = {
      text: 'INSERT INTO history VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
      values: [id, owner, category, image, result, createdAt],
    };

    const historyId = await this._pool.query(query);

    if (!historyId.rows[0].id) {
      throw new InvariantError('History gagal ditambahkan');
    }

    return historyId.rows[0].id;
  }

  async getHistory(owner) {
    const query = {
      text: 'SELECT categories, image_url, created_at FROM history WHERE user_id = $1',
      values: [owner],
    };

    const data = await this._pool.query(query);

    if (!data.rows[0]) {
      throw new NotFoundError('User tidak memiliki history');
    }

    return data;
  }

  async getHistoryById(id) {
    const query = {
      text: 'SELECT * FROM history WHERE id = $1',
      values: [id],
    };

    const data = await this.pool.query(query);

    if (!data.rows[0]) {
      throw new NotFoundError('History tidak ditemukan');
    }

    return data;
  }
}

module.exports = HistoryService;
