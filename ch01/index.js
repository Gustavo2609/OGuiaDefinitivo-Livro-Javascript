document.getElementById('inputFile').addEventListener('change', function(){
    let file = new FileReader();
    file.onload = () => {
        let content = file.result;
        let textManu = file.result.replace(/\s/g, "").toUpperCase();
        document.getElementById('output').textContent = "without spaces and convert to upper case: "+textManu;
        
    }
    
     
     file.readAsText(this.files[0])
});
