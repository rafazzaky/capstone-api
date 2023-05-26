exports.up = (pgm) => {
  pgm.createTable('history', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    user_id: {
      type: 'INTEGER',
      notNull: true,
      references: {
        table: 'users',
        column: 'id',
      },
      onDelete: 'CASCADE',
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
};

exports.down = (pgm) => {
  pgm.dropTable('history');
};
