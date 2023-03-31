import { execSync as exec } from 'child_process';
import dayjs from 'dayjs';

const name = "macbare"
const email = "macbare@qq.com"

const currentName = exec('git config user.name', { encoding: 'utf-8' }).trim();
const currentEmail = exec('git config user.email', { encoding: 'utf-8' }).trim();

currentName !== name && exec(`git config user.name "${name}"`, { stdio: 'inherit' });
currentEmail !== email && exec(`git config user.email "${email}"`, { stdio: 'inherit' });

exec('git add .', { stdio: 'inherit' });

exec(`git commit -m "backup from ${dayjs().format('YYYY-MM-DD')}"`, { stdio: 'inherit' })

exec('git push', { stdio: 'inherit' });
