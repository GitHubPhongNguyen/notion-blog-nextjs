export const metadata = {
  title: 'Contact',
  description: 'This is contact page.',
};

export default function ContactPage() {
  return (
    <>
      <h1 className="mt-12 text-center text-3xl font-bold">
        Mong muốn được lắng nghe từ bạn, <br />
        Liên hệ 👋
      </h1>
      <form
        className="mx-auto mt-20 max-w-[720px]"
        action="mailto:nguyenvanphong5998@gmail.com"
        method="post"
        encType="text/plain"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="mb-2 block text-lg font-semibold">
              Tên của bạn
            </span>
            <input
              name="name"
              className="w-full rounded-sm bg-gray-200 px-3 py-3 text-sm text-black"
              type="text"
              placeholder="Nhập tên của bạn"
            />
          </div>
          <div>
            <span className="mb-2 block text-lg font-semibold">Email</span>
            <input
              name="mail"
              className="w-full rounded-sm bg-gray-200 px-3 py-3 text-sm text-black"
              type="email"
              placeholder="Nhập tên của bạn"
            />
          </div>
        </div>
        <div className="mt-6">
          <span className="mb-2 block text-lg font-semibold">Nội dung</span>
          <textarea
            name="comment"
            className="h-40 w-full rounded-sm bg-gray-200 px-3 py-3 text-sm text-black"
            placeholder="Nhập tên của bạn"
          />
        </div>
        <div className="mt-6">
          <input
            type="submit"
            value="Gửi"
            className="text-md cursor-pointer rounded-sm bg-gray-950 px-20 py-2 font-semibold text-slate-100"
          />
        </div>
      </form>
    </>
  );
}
