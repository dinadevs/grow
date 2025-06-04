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
    </tr>
     <tr>
      <td><strong>CT-07:</strong><br>Utilizar a loja de prêmios</td>
      <td>
        <ul>
          <li>RF-11: Permitir que o filho utilize suas moedas para trocar por prêmios.</li>
          <li>RF-09: Possibilitar ao usuário visualizar a trajetória e as recompensas conquistadas.</li>
        </ul>
      </td>
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
      <td></td>
    </tr>
    <tr>
      <td><strong>CT-08</strong><br>...</td>
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
      <td><strong>CT-09</strong><br>...</td>
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
      <td><strong>CT-10</strong><br>...</td>
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
