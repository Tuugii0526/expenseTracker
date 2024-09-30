import Link from "next/link";

export const SignIn = () => {
  return (
    <div className="w-1/2 min-w-[240px] h-fit bg-white flex flex-col items-center gap-4 rounded-lg ring-1 p-2">
      <h2>Gelda</h2>
      <form action="" className="flex flex-col gap-4">
        <input type="email" className="ring-1 rounded-sm p-1" placeholder="Email"/>
        <input type="password" className="ring-1 rounded-sm p-1" placeholder="Password"/>
        <button class="btn bg-[#0166FF] ">Log in</button>
      </form>
      <div className="w-full flex flex-wrap justify-center gap-2">
        <p>Dont have an account ?</p>
        <Link href={"./sign/sign-up"}>
        <button className="text-[#0166FF]">Sign up</button>
        </Link>
      </div>
    </div>
  );
};
