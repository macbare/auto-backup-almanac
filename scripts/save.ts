import { writeFile, ensureDirSync } from 'fs-extra';
import axios from 'axios';
import { resolve } from 'path';
import dayjs from 'dayjs';

const url = `https://almanac.baii.icu/api/almanac/picture?time=${dayjs().format('YYYY-MM-DD')}`;
const backupPath = resolve(__dirname, '../backup');

ensureDirSync(backupPath);

axios.get(url)
  .then(response => {
    const dateStr = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const fileName = `${dateStr}.svg`;
    const filePath = resolve(backupPath, fileName);
    writeFile(filePath, response.data)
      .then(() => {
        console.log(`Image saved as ${filePath}`);
      })
      .catch(error => {
        console.error(error.message);
      });
  })
  .catch(error => {
    console.error(error.message);
  });
