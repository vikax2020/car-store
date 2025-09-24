
const imageUploader = (file,folder) => {
//    console.log(file , "filessssss")

const filenextension  = file.name.split(".")[1]
console.log(filenextension,"filenextension")


const filename = Math.random().toString(36).substring(2)
console.log(filename , "filename")


const concatFile = `${filename}.${filenextension}`
// console.log(concatFile,"concatination")
file.mv(`Public/Images/${folder}/${concatFile}`)

return concatFile;


}

export default imageUploader