import { GithubOutlined } from "@ant-design/icons";

export default function Header(){
    return <div className="w-full px-6 bg-[#161c22] flex items-center font-semibold text-slate-50 h-20 border-slate-700 border-b">
        <GithubOutlined className="text-[40px]" />
        <div className="pl-2.5">
            My App
        </div>
    </div>
}