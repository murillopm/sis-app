'use client'

import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/authClient'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                SIS App
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={async () => {
                await authClient.revokeSessions()
                router.push('/login')
              }}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>

          {/* <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div> */}
        </div>
      </div>

      {/* Mobile menu */}
      {/* {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <a
              href="/painel"
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              Painel
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projetos
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Relatórios
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Configurações
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                >
                  <User className="h-4 w-4 mr-2" />
                  Perfil
                </Button>
              </div>
              <div className="flex items-center px-3 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </nav>
  )
}
