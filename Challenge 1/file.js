let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = (isString, calculatedAsNumber) => { 
    const isString = typeof calculated === 'string'; 
    const calculatedAsNumber = isString ? calculated : parseInt(calculated);
    calculated = calculatedAsNumber + 1;
};

const calcUser = () => {
  logCalc();
  if (calculated > 2) user = 'John';
  if (calculated > 2) state = 'requesting';
  if (calculated > 3) state = 'idle';   // find out if this line is neccessary
};

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`user: ${user} (${calculated})`);
	}
};

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()