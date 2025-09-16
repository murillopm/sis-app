'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { authClient } from '@/lib/authClient'

import googleSvg from '@/assets/google.svg'

export const SocialLogin = () => {
  const router = useRouter()

  return (
    <button
      className="w-full p-3 rounded-[100px] border border-[#E1E2E1] flex items-center justify-center gap-2 text-sm leading-6 font-medium text-[#222322] cursor-pointer"
      onClick={() => {
        authClient.signIn.social({
          provider: 'google',
          fetchOptions: {
            onSuccess: () => {
              router.push('/painel')
            },
          },
        })
      }}
    >
      <Image src={googleSvg.src} alt="Google" width={22} height={22} />
      Entrar com o Google
    </button>
  )
}
