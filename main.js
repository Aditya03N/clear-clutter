import fs from "fs/promises";
import path from "path";
import fsn from "fs";


async function read() {
    try {
        const dir="C:\\Users\\Aditya Anande\\OneDrive\\Pictures\\Desktop\\js\\clutter"
        const files = await fs.readdir(dir);  // read all files in folder
        console.log(files);

        
         for (const item of files){
            let ext = path.extname(item)
            if (!ext){
                continue;
            }
            if(ext===".js" || ext===".json"){
                continue;
            }
        const foldername = ext.slice(1)+"files";
       if (!fsn.existsSync(path.join(dir, foldername))) {
    await fs.mkdir(path.join(dir, foldername));
}

await fs.rename(
    path.join(dir, item),
    path.join(dir, foldername, item)
);
    }
    } catch (err) {
        console.error("Error:", err);
    }
   
}

read();
