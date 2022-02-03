process.stdin.on('readable', () => {
  const message = process.stdin.read();

  const messageConsole = message + message;

  console.log(messageConsole)
})