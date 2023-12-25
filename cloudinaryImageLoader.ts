export default function cloudinaryImageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {

  if (src.startsWith("/static")) {
    return src
  }

  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  return `https://res.cloudinary.com/strengthen-yourself/image/upload/${params.join(
    ','
  )}${src}`
}