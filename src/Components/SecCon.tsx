
export default function SecCon() {
  return (
    <div className="flex flex-col items-center  p-5 gap-7  border-blue-100 rounded-2xl  border-2 h-165">
      <p className="text-2xl btn-in-s">Contact Us</p>
      <form className="w-[70%] bg-(--scondary-color) border-blue-100 border-3 rounded-[10px] p-6 flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col items-start gap-2">
            <label htmlFor="name" className="text-lg text-white">Enter Your Name</label>
            <input type="text" id="name" required  className="outline-0 btn-in border-2 border-blue-100 rounded-3xl p-2 w-100 h-11" />
        </div>
        <div className="flex flex-col items-start gap-2">
            <label htmlFor="email" className="text-lg text-white">Enter Your Email</label>
            <input type="email" id="email" required className="outline-0 btn-in border-2 border-blue-100 rounded-3xl p-2 w-100 h-11" />
        </div>
        <div className="flex flex-col items-start gap-2">
            <textarea  id="text" cols={50} rows={6} className="outline-0  border-2 border-blue-100 rounded-2xl p-3  " placeholder="Enter Your Message"> Enter Your Message </textarea>
        </div>
        <button className="btn">send</button>
      </form>
    </div>
  )
}
