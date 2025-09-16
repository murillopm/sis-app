import { SocialLogin } from './SocialLogin'
import Image from 'next/image'
import logoSvg from '@/assets/logo.svg'

export default function LoginPage() {
  return (
    <div className="w-[400px] h-[400px] bg-[#FDFDFD] rounded-[12px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.12)] p-6">
      <div className="flex flex-col items-center gap-8">
        <Image src={logoSvg.src} alt="Logo" width={34} height={58} />
        <div className="text-center space-y-0.5">
          <h2 className="text-2xl font-medium text-[#222322]">Entrar</h2>
          <p className="text-sm leading-8 text-[#626362]">
            Crie sua conta com seu e-mail Google
          </p>
        </div>
        <SocialLogin />
        <div className="flex items-center gap-1 text-sm leading-[100%] text-[#767776]">
          Feito com
          <Image src={logoSvg.src} alt="Logo" width={8} height={14} />
          Sis
        </div>
      </div>
    </div>
  )
}
