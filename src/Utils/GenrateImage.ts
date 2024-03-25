import NoImage from "Assets/NoImg.png"
import NoProfile from "Assets/NoProfile.png"










const GenrateImage = (imageObj: Record<string, any>, varient: "profile" | "img" = "img") => {
    let Image = varient == "img" ? NoImage : NoProfile

    let Link = imageObj?.url
    let Location = imageObj?.location
    let Path = window.location?.ImgPath

    return !Link ? Image : Location == "local" ? `${Path}/${Link}` : Link
}


export default GenrateImage;