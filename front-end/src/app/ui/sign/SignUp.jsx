import Link from "next/link";

export const SignUp = () => {
  return (
    <div className="w-1/2 min-w-[240px] h-fit bg-white flex flex-col items-center gap-4 rounded-lg ring-1 p-2">
      <h2>Gelda</h2>
      <form action="" className="flex flex-col gap-4 *:ring-1 *:rounded-sm *:p-1">
      <input type="text" placeholder="Name"/>
      <input type="email"  placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      <input type="password" placeholder="Re-Password"/>
      </form>
      <button class="btn bg-[#0166FF] w-full">Sign up</button>
      <div className="w-full flex flex-wrap justify-center gap-2">
        <p>Already have an account ?</p>
        <Link href={"/sign"}>
        <button className="text-[#0166FF]">Log in</button>
        </Link>
      </div>
    </div>
  );
};
