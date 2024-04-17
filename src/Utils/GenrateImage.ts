import NoImage from "Assets/NoImg.png"
import NoProfile from "Assets/NoProfile.png"










const GenrateImage = (imageObj: Record<string, any>, varient: "profile" | "img" = "img") => {
    let Image = varient == "img" ? NoImage : NoProfile

    let Link = imageObj?.url
    let Location = imageObj?.storage
    let Path = window.location?.ImgPath

    // console.log("sadadasdasdasdasdasdsada" , Link ? Location == "local" ? `${Path}/${Link}` : Link : Image , [Path , Location]);
    
    return Link ? Location == "local" ? `${Path}/${Link}` : Link : Image
}


export default GenrateImage;