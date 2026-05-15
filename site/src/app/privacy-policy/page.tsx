import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <main className="container-custom py-12">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8 border-b-2 border-gray-100 pb-4">Política de Privacidade</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 flex flex-col gap-6">
          <p>
            A sua privacidade é importante para nós. É política do Bambuí em Destaque respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Bambuí em Destaque, e outros sites que possuímos e operamos.
          </p>
          
          <section>
            <h2 className="text-xl font-bold text-primary mb-4">1. Informações que coletamos</h2>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-primary mb-4">2. Uso das informações</h2>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-primary mb-4">3. Compartilhamento de dados</h2>
            <p>
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-primary mb-4">4. Seus Direitos (LGPD)</h2>
            <p>Como titular de dados, você tem o direito de:</p>
            <ul className="list-disc pl-5 mt-3 flex flex-col gap-2">
              <li>Confirmar a existência de tratamento de seus dados;</li>
              <li>Acessar seus dados;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Solicitar a portabilidade dos dados a outro fornecedor de serviço ou produto.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">5. Cookies</h2>
            <p>
              Utilizamos cookies para entender como você usa nosso site e para melhorar sua experiência. Você pode optar por recusar cookies através do nosso banner de consentimento ou nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">6. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do e-mail: <span className="font-semibold text-primary">contato@bambuiemdestaque.com.br</span>
            </p>
          </section>
          
          <div className="mt-8 pt-8 border-t border-gray-100">
            <Link href="/" className="btn-news">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
