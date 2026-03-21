import express from 'express';

const app = express();

app.listen(5001, () => {
  console.log('Server đang chạy trên cổng 5001');
});

app.get('/api/tasks', (request, response) => {
    response.status(200).send('duc');

});
