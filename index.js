const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay');

const GoStumble = (code, auth) => new Promise((resolve, reject) => {

    fetch(`http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/${code}`, {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

(async () => {

    console.log(`
███████ ████████ ██    ██ ███    ███ ██████  ██      ███████         
██         ██    ██    ██ ████  ████ ██   ██ ██      ██           
███████    ██    ██    ██ ██ ████ ██ ██████  ██      █████          
     ██    ██    ██    ██ ██  ██  ██ ██   ██ ██      ██            
███████    ██     ██████  ██      ██ ██████  ███████ ███████    

By : ${chalk.green('@Bimititt')} - ${chalk.yellow('Play This Script At 11.00 - 16.00')}

Features :

1. ${chalk.magenta('Reward : 1 Crown + 30 Trophy + 35 Star ( Stumble Pass ) + 3000 EXP')}
2. ${chalk.magenta('Reward : 20 Trophy + 30 Star ( Stumble Pass ) + 1500 EXP')}
3. ${chalk.magenta('Reward : 10 Trophy + 25 Star ( Stumble Pass ) + 500 EXP')}
4. ${chalk.magenta('Reward : 20 Star ( Stumble Pass ) + 100 EXP')}
`);

    const feature = rs.question('[+] Enter feature needed : ');

    if (feature == '1') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 1000 = 1 sec ) : ');
        console.log('');

        while (true) {

            var code = '3';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.blue(`[ ${moment().format('HH:mm:ss')} ] Expired Cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                const crown = data.User.Crowns;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nick : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} | ${chalk.blue(`Pass Star : ${tokenPass}`)} | ${chalk.yellow(`Trophy : ${trophy}`)} | ${chalk.red(`Crown : ${crown}`)}`));
                await delay(time)

            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Your Account Has Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }
        
    } else if (feature == '2') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 1000 = 1 sec ) : ');
        console.log('');

        while (true) {

            var code = '2';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Expired Cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} |  ${chalk.blue(`Pass Star : ${tokenPass}`)}  | ${chalk.yellow(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Your Account Has Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '3') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 1000 = 1 sec ) : ');
        console.log('');

        while (true) {

            var code = '1';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} |  ${chalk.blue(`Pass Star : ${tokenPass}`)}  | ${chalk.yellow(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Your Account Has Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '4') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 1000 = 1 sec ) : ');
        console.log('');
        
        while (true) {

            var code = '0';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} | ${chalk.blue(`Pass Star : ${tokenPass}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Your Account Has Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else {

        console.log(chalk.red(`\n[ ${moment().format('HH:mm:ss')} ] Wrong feature select !`));

    }
    

})();