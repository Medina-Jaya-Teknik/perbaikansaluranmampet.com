module.exports = {
  apps: [
    {
      name: 'perbaikansaluranmampet',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3003',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3003
      }
    }
  ]
};
