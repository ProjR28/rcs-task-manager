import SidebarButton from './SidebarButton'

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-blue-600">
          Gerenciador de Tarefas
        </h1>
        <p className="text-sm text-gray-500">
          Um simples{' '}
          <span className="text-blue-600">gerenciador de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant={'unselected'}>Início</SidebarButton>
        <SidebarButton variant={'selected'}>Minhas Tarefas</SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar
