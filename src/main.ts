import { app } from './app';

const server = app.then(appInstance => {
  const PORT = appInstance.get('port');

  return appInstance.listen(PORT, function() {
    console.log(`Server up at ${PORT}`);
  });
});

export default server;
