"use server"
import fs from "fs/promises";
export const summitAction = async (e) => {
    console.log(e.get("name"), e.get("add"));

    let a = await fs.writeFile("Gyan.txt", `name is ${e.get("name")} and Addess is ${e.get("add")}`)
    console.log(a);

  }