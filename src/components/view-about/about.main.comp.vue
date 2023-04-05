<script lang="ts">
import { defineComponent } from "vue";
import SpriteComponent from "@/components/global/comp/sprite.comp.vue";
import InfoComponent from "./about.info.comp.vue";

export default defineComponent({
  name: "AboutMainComponent",
  components: { SpriteComponent, InfoComponent },
  data() {
    return {
      title: "Red Boar Inn",
      articles: [
        {
          title: "Projeto",
          content: `
          Bem-vindo(a) ao Red Boar Inn, um jogo MMO RPG simples e divertido!
          Em nosso mundo, o objetivo é criar um ambiente livre e colaborativo onde os jogadores possam explorar, lutar e interagir uns com os outros.
          Com gráficos envolventes e uma jogabilidade intuitiva, você pode criar seu próprio personagem e mergulhar em um mundo repleto de aventuras emocionantes.
          No Red Boar Inn, você pode formar alianças com outros jogadores, coletar recursos valiosos e construir sua própria história.
          Explore masmorras, lute contra chefes poderosos e experimente um sistema de combate estratégico.
          Com cada nível que você avança, desbloqueia novas habilidades e equipamentos para personalizar seu personagem.
          O mundo aberto do Red Boar Inn permite que você viaje por terras desconhecidas, converse com NPCs interessantes e desenvolva sua própria história.
          Com um sistema de comércio dinâmico, você pode comprar e vender itens para outros jogadores, construir seu próprio negócio e se tornar uma das figuras mais influentes do mundo.
          Venha se juntar a nós no Red Boar Inn e comece sua jornada hoje mesmo!
          `,
        },
        {
          title: "Termos de Serviço",
          content: `Red Boar Inn é um RPG on-line baseado em texto, massivamente multiplayer e leve.
          Ao jogar, você concorda em respeitar as regras e as diretrizes estabelecidas pelos nossos Termos de Uso.
          Você reconhece que é responsável por qualquer conteúdo gerado por você, incluindo mensagens enviadas em bate-papo ou fóruns.
          Você não pode usar cheats, exploits ou outros meios não autorizados para obter vantagens no jogo.
          Reservamos o direito de banir contas que violarem nossos Termos de Uso sem aviso prévio. O jogo é oferecido "como está", sem garantias ou representações de qualquer tipo.
          Não somos responsáveis por perdas ou danos decorrentes do uso do jogo ou de sua incapacidade de usá-lo. Aproveite o jogo!`,
        },
        {
          title: "Segurança dos Dados",
          content: `
          A privacidade e segurança de seus dados são muito importantes para nós.
          Ao jogar nosso jogo de RPG online no navegador, coletamos e usamos suas informações pessoais apenas para melhorar sua experiência de jogo.
          Não compartilharemos suas informações com terceiros sem seu consentimento explícito, exceto quando exigido por lei ou em casos de abuso ou fraude.
          Utilizamos medidas de segurança apropriadas para proteger seus dados contra perda, acesso não autorizado ou divulgação.
          Se você tiver dúvidas ou preocupações sobre a segurança de seus dados, entre em contato conosco imediatamente.
          Reservamos o direito de atualizar nossa Política de Segurança de Dados periodicamente, e notificaremos você caso ocorram mudanças significativas.
          Ao jogar nosso jogo, você concorda com nossa Política de Segurança de Dados.`,
        },
        {
          title: "Colaboração",
          content: `
          O Red Boar Inn está animado em anunciar que estamos abrindo nosso projeto para colaborações futuras de desenvolvedores.
          Nosso jogo é de código aberto e estamos procurando colaboradores talentosos para contribuir com novos recursos, correções de bugs e melhorias gerais.
          Junte-se à nossa equipe e ajude-nos a criar um mundo ainda mais emocionante e interativo!
          `,
        },
        {
          title: "Créditos",
          content: `
          Agradecemos a todos os fornecedores de assets gratuitos, imagens e sprites que nos permitiram criar o Red Boar Inn.
          Sem sua generosidade, não teríamos sido capazes de criar um jogo tão visualmente atraente e cativante.
          `,
          links: [
            {
              name: "liuzishan",
              link: "https://www.freepik.com/author/liuzishan",
            },
            {
              name: "ionicons",
              link: "https://ionic.io/ionicons",
            },
            {
              name: "Hypnos_art",
              link: "https://twitter.com/Hypnos_art?s=09",
            },
          ],
        },
      ],
    };
  },
});
</script>

<template>
  <div class="background">
    <h1 class="title" translate="no">
      Projeto
      <br />
      {{ title }}
    </h1>

    <span class="background-banner"></span>

    <div class="container-banner main-container">
      <SpriteComponent
        :rotate-y="true"
        :sprite-name="'merchant'"
        :sprite-gender="'woman'"
      />

      <div class="articles-container">
        <InfoComponent
          v-for="article in articles"
          :key="article.title"
          :title="article.title"
          :content="article.content"
          :credits="article.links"
        />
      </div>

      <SpriteComponent
        :rotate-y="false"
        :sprite-name="'merchant'"
        :sprite-gender="'man'"
      />
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: linear-gradient(#2222225b, #2222225b, #222222c0),
    url("@/assets/pictures/img3.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.title {
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 5rem;
  color: white;
}
.background-banner {
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 220px;
  background-color: #222222;
}
.container-banner {
  display: grid;
  padding-bottom: 5rem;
  grid-template-columns: 0.2fr 1fr 0.2fr;
}
.articles-container {
  z-index: 1;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  background: linear-gradient(#282828, #323232c0);
}

@media (max-width: 780px) {
  .background {
    background-repeat: no-repeat;
    background-size: auto;
  }
  .title {
    font-size: 24px;
    padding-bottom: 3rem;
  }
}
</style>
