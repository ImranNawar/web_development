const fs = require("fs");

class Notes {
  constructor() {
    this.fileName = "data.json";
  }

  readFile() {
    try {
      const data = fs.readFileSync(this.fileName, "utf-8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading the file:", err);
      return [];
    }
  }

  writeFile(data) {
    try {
      fs.writeFileSync(this.fileName, JSON.stringify(data, null, 2), "utf-8");
      console.log("File updated successfully.");
    } catch (err) {
      console.error("Error writing to the file:", err);
    }
  }

  insert(dataToInsert) {
    const existingData = this.readFile();
    existingData.push(dataToInsert);
    this.writeFile(existingData);
  }

  search(searchTerm) {
    const data = this.readFile();
    const results = data.filter((item) => {
      // Modify this condition to match your search criteria (e.g., based on name or id)
      return item.name === searchTerm || item.id === parseInt(searchTerm);
    });
    return results;
  }

  delete(idToDelete) {
    const data = this.readFile();
    const newData = data.filter((item) => item.id !== idToDelete);
    this.writeFile(newData);
  }

  update(idToUpdate, newData) {
    const data = this.readFile();
    const updatedData = data.map((item) => {
      if (item.id === idToUpdate) {
        return { ...item, ...newData };
      }
      return item;
    });
    this.writeFile(updatedData);
  }
}

module.exports = Notes;
