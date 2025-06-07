# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
<ul>
  <li>Site publicado na internet;</li>
  <li>Navegador da internet: Chrome, Firefox, Edge ou Safari.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
  <thead>
    <tr>
      <th>Caso de teste</th>
      <th>Requisitos associados</th>
      <th>Objetivo do teste</th>
      <th>Passos</th>
      <th>Critérios de êxito</th>
      <th>Responsável pelo desenvolvimento</th>
      <th>Responsável pelo Teste</th>
   </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>CT-01:</strong><br>Escolha de avatar</td>
      <td>
        <ul>
          <li>RF-12: Possibilitar ao filho escolher um avatarr</li>
        </ul>
      </td>
      <td>Testar se o avatar é salvo e refletido na interface.</td>
      <td>
        <ol>
          <li>Acessar a home do filho</li>
          <li>Clicar no icone de avatar</li>
          <li>Selecionar novo avatar</li>
          <li>Clicar em “Atualizar”</li>
          <li>Voltar à página anterior</li>
        </ol>
      </td>
      <td>Avatar selecionado salvo e visível na barra de status.</td>
      <td>Caroline</td>
      <td>Amanda</td>
    </tr>
    <tr>
  <td><strong>CT-02:</strong><br>Cadastro de penalidade</td>
  <td>
    <ul>
      <li>RF-07: Permitir o cadastro e contabilização de penalidades</li>
    </ul>
  </td>
  <td>Testar se a penalidade é cadastrada, subtrai XP e moedas do usuário e aparece no histórico de penalidades.</td>
  <td>
    <ol>
      <li>Login como responsável</li>
      <li>Acessar a página de penalidades</li>
      <li>Clicar em "Nova Penalidade"</li>
      <li>Preencher o título, XP e moedas da penalidade</li>
      <li>Clicar em "Salvar"</li>
      <li>Verificar se os valores foram subtraídos corretamente</li>
      <li>Verificar se a penalidade aparece listada na página de penalidades</li>
    </ol>
  </td>
  <td>Penalidade cadastrada, valores subtraídos e penalidade listada no histórico.</td>
  <td>Caroline</td>
  <td>Amanda</td>
</tr>
    <tr>
      <td><strong>CT-03:</strong><br>Verificar o cadastro de recompensas</td>
      <td>
        <ul>
          <li>RF-05: Possibilitar que os responsáveis cadastrem metas, visualizem as metas cadastradas e estipulem prazos para seu cumprimento.</li>
        </ul>
      </td>
      <td>Verificar se o cadastro de recompensas está sendo feito corretamente.</td>
      <td>
        <ol>
          <li>Acessar o navegador.</li>
          <li>Faça login no endereço do site, com um usuário do tipo responsável.</li>
          <li>Clique em "Prêmios" > "Novo prêmio".</li>
          <li>Preencha os campos obrigatórios.</li>
          <li>Clique em "Cadastrar". </li>
        </ol>
      </td>
      <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve ser exibida a mensagem "Salvo". Em seguida, o sistema deve redirecionar para a lista de prêmios.</td>
      <td>Edna</td>
      <td>Caroline</td>
    </tr>
    <tr>
      <td><strong>CT-04:</strong><br>Verificar a tela trajetória e recompensas conquistadas.</td>
      <td>
        <ul>
          <li>RF-09: Possibilitar ao usuário visualizar a trajetória e as recompensas conquistadas.</li>
        </ul>
      </td>
      <td>Verificar se a visualização esta aparecendo corretamente.</td>
      <td>
        <ol>
          <li>Acessar o navegador.</li>
          <li>Faça login no endereço do site.</li>
          <li>Clique em "trajetória".</li>
          <li>A trajetória poderá ser observada na página.</li>
        </ol>
      </td>
      <td>Deverá exibir a trajetória e as recompensas conquistadas.</td>
      <td>Edna</td>
      <td>Caroline</td>
    </tr>
    <tr>
      <td><strong>CT-05</strong><br>Verificar a conclusão de tarefas</td>
      <td>
        <ul>
          <li>RF-06: Exibir atividades finalizadas para aprovação do pai ou dos responsáveis.</li>
          <li>RF-08: Disponibilizar um checklist para gerenciar tarefas e metas, permitindo marcar itens como concluídos ou não.	</li>
          <li>RF-10: Contabilizar moedas e/ou experiência (XP) ao completar uma tarefa.</li>
        </ul>
      </td>
      <td>Verificar se a conclusão de tarefas está funcionando, se elas aparecem para aprovação e se as recompensas são contabilizadas mediante aprovação.</td>
      <td>
        <ol>
          <li>Acessar o navegador.</li>
          <li>Faça login como filho no endereço do site.</li>
          <li>Visualize a checklist do dia (requisito: ter cadastrado ao menos duas atividades e/ou metas).</li>
          <li>Marque os checkboxes das tarefas.</li>
          <li>Em outra aba, faça login como responsável desse jogador no endereço do site.</li>
          <li>Visualize a home e clique na opção "Aprovações".</li>
          <li>Aprove uma tarefa e negue a outra.</li>
          <li>Recarregue a página e verifique por meio da barra de status do jogador se apenas os XPs e moedas da tarefa aprovada foram contabilizados.</li>
          <li>Verifique também se elas sumiram da página de aprovações.</li>
          <li>Na aba do filho, recarregue e verifique também se não é mais possível desmarcar as tarefas.</li>
        </ol>
      </td>
      <td>Deverá permitir que tarefas sejam concluídas, aprovadas ou negadas e as recompensas devem ser contabilizadas.</td>
      <td>Amanda</td>
      <td>Rodrigo</td>
    </tr>
    <tr>
      <td><strong>CT-06</strong><br>Cadastro de metas e prazos</td>
      <td>
        <ul>
          <li>RF-04: Permitir que pais ou responsáveis cadastrem metas e estipulem prazos</li>
        </ul>
      </td>
      <td> Verificar se o cadastro de metas está sendo feito e visualizado corretamente</td>
      <td>
        <ol>
          <li>Acessar o navegador.</li>
          <li>Faça login no endereço do site, com um usuário do tipo responsável.</li>
          <li>Clique em "Metas" > "Novo meta".</li>
          <li>Preencha os campos obrigatórios .</li>
          <li>Estipule a data de início e a data de fim .</li>
          <li>Clique em "Cadastrar". </li>
        </ol>
      </td>
      <td>Deve ocorrer a validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve ser exibida a mensagem "Salvo". Em seguida, ao clicar em voltar, a nova meta deve estar listada na página de metas.</td>
      <td>Fernanda</td>
      <td>Edna</td>
    </tr>
     <tr>
      <td><strong>CT-07:</strong><br>Utilizar a loja de prêmios</td>
      <td>
        <ul>
          <li>RF-11: Permitir que o filho utilize suas moedas para trocar por prêmios.</li>
      <td>Verificar se o sistema permite a compra e o resgate de prêmios corretamente com base nas moedas e XP acumulados.</td>
      <td>
        <ol>
          <li>Login com usuário do tipo <strong>filho</strong>.</li>
          <li>Acessar a aba <strong>Lojinha</strong>.</li>
          <li>Verificar se os prêmios são exibidos corretamente.</li>
          <li>Clicar em <strong>Comprar</strong> em um prêmio acessível (com moedas suficientes).</li>
          <li>Clicar em <strong>Resgatar</strong> em um prêmio disponível via XP (com progresso suficiente).</li>
          <li>Verificar se o prêmio desaparece da loja após a ação.</li>
          <li>Verificar se moedas ou XP foram deduzidos corretamente.</li>
        </ol>
      </td>
      <td>Prêmios comprados devem ser removidos e deduzir moedas. Prêmios resgatados via XP também devem ser removidos corretamente.</td>
      <td>Rodrigo</td>
      <td>Naiara</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>CT-08:</strong><br>Login do usuário</td>
      <td>
        <ul>
          <li>RF-01: Permitir que o usuário faça login na sua conta.</li>
        </ul>
      </td>
      <td> Verificar se o sistema reconhece corretamente  as credenciais de usuários cadastrados, combinações inválidas de login e/ou senha, e usuários não cadastrados. Verificar se as informações estão salvas no LocalStorage.   
</td>
      <td>
        <ol>
          <li>Acessar o navegador.</li>
          <li>Informar o endereço do site.</li>
          <li>Preencha o usuário e senha cadastrados.</li>
          <li>Clique em "Login".</li>
        </ol>
      </td>
      <td> Se as credenciais forem válidas, o usuário deverá ser redirecionado para a página inicial (home). Caso as credenciais sejam inválidas ou o usuário não esteja cadastrado, o sistema deverá exibir um alerta.</td>
      <td>Naiara</td>
      <td>Fernanda</td>
    </tr>
    <tr>
      <td><strong>CT-09:</strong><br>Cadastro de atividade</td>
      <td>
        <ul>
          <li>RF-03: Permitir que pais ou responsáveis cadastrem atividades.</li> 
          </ul>
      </td>
      <td>Verificar se as atividades estão sendo cadastradas corretamente e exibidas na página de atividades com as informações fornecidas pelo pai ou responsável (XP, moedas, recorrência e dia da semana). Ao clicar em "Cadastrar", a mensagem "Tá salvo!" deve ser exibida e, em seguida, o usuário deve ser redirecionado para a lista de atividades. 
      <td> 
      <td>
        <ol>
          <li>Acessar o navegador.</li>
          <li>Faça login no endereço do site, com um usuário do tipo responsável.</li>
          <li>Clique em "Atividades" > "Nova Atividade".</li>
          <li>Preencha os campos "Título", "XP", "Moedas", "Recorrência" e, se a recorrência for semanal, preencher o campo "dia da semana".</li>
          <li>Clique em "Cadastrar". </li>
        </ol>
      </td>
      <td>Naiara</td>
      <td>Fernanda</td>
    </tr>
    <tr>
      <td><strong>CT-10</strong><br>Cadastro de conta de responsável e de filhos.</td>
      <td>
        <ul>
          <li>RF-02: Permitir que o pai/responsável cadastre a sua conta e a de seus filhos.</li>
        </ul>
      </td>
      <td> Verificar se a funcionalidade de cadastro de novos usuários está operando corretamente, de acordo com os requisitos estabelecidos e as validações esperadas. </td>
      <td>
        <ol>
          <li>Acessar o navegador.</li>
          <li>Informar o endereço do site.</li>
          <li>Na página de login, clicar na opçãp "Cadastre-se".</li>
          <li>Preencher "nickname" do Responsável com um valor válido e não utilizado</li>
          <li>Preencher "senha" do Responsável com uma senha válida.</li>
          <li>Preencher "nickname" do Filho(a) com um valor válido e não utilizado.</li>
          <li>Preencher "senha" do Filho(a) com uma senha válida</li>
          <li>Clicar no botão "Cadastrar".</li>
        </ol>
      </td>
      <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Cadastrado!" e o usuário deve ser redirecionado para a página de login.</td>
      <td>Fernanda</td>
      <td>Edna</td>
    </tr>
    <tr>
      <td><strong>CT-11</strong><br>...</td>
      <td>
        <ul>
          <li>RF-001: ...</li>
        </ul>
      </td>
      <td>...</td>
      <td>
        <ol>
          <li>...</li>
          <li>...</li>
        </ol>
      </td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td><strong>CT-12</strong><br>...</td>
      <td>
        <ul>
          <li>RF-001: ...</li>
        </ul>
      </td>
      <td>...</td>
      <td>
        <ol>
          <li>...</li>
          <li>...</li>
        </ol>
      </td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
