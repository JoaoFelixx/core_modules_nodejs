const os = require('os'); // Módulo que trabalha com informações do sistema operacioanal

// method returns the system uptime in seconds

const currentOS = {
	nameSystem: os.type(),
	release:    os.release(),
	totalMem:   os.totalmem(),
	freeMem:    os.freemem(),
	info: os.userInfo()

}

console.table(currentOS); 