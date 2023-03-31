import { execSync as exec } from 'child_process';
import dayjs from 'dayjs';

exec('git add .', { stdio: 'inherit' });

exec(`git commit -m "backup from ${dayjs().format('YYYY-MM-DD')}"`, { stdio: 'inherit' });

// exec('git push', { stdio: 'inherit' });
