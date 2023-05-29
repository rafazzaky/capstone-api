exports.up = (pgm) => {
  pgm.createTable('history', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    categories: {
      type: 'TEXT',
    },
    image_url: {
      type: 'TEXT',
    },
    data: {
      type: 'JSON',
    },
    created_at: {
      type: 'TEXT',
      notNull: true,
    },
  });
  pgm.addConstraint('history', 'fk_history.user_id_users.id', 'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropTable('history');
};
