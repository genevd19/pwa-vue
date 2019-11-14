<template>
  <div class="equipe">
    <h1>La page Equipe</h1>
    <EquipeName></EquipeName>
  </div>
</template>
<script>
// @ is an alias to /src
import EquipeName from '@/components/Membre.vue'

export default {
  name: 'equipe',
  data() {
  return {
    personnel:[
        {
            nom: "Van Diest",
            prenom: "Geneviève",
            pseudo: "Gene",
            description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus nec iaculis mauris",
            tags:["#js","#css","#html"],
            ddn:"18/11/1975",
            photo:"https://picsum.photos/200/300?random=1",

        },
        {
            nom: "Van Diest",
            prenom: "Geneviève",
            pseudo: "Gene",
            description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus nec iaculis mauris",
            tags:["#js","#css","#html"],
            ddn:"18/11/1975",
            photo:"https://picsum.photos/200/300?random=1",

        },
        {
            nom: "Van Diest",
            prenom: "Geneviève",
            pseudo: "Gene",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus nec iaculis mauris.",
            tags:["#js","#css","#html"],
            ddn:"18/11/1975",
            photo:"https://picsum.photos/200/300?random=1",

        },
        {
            nom: "Van Diest",
            prenom: "Geneviève",
            pseudo: "Gene",
            description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus nec iaculis mauris",
            tags:["#js","#css","#html"],
            ddn:"18/11/1975",
            photo:"https://picsum.photos/200/300?random=1",

        },
        {
            nom: "Van Diest",
            prenom: "Geneviève",
            pseudo: "Gene",
            description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus nec iaculis mauris",
            tags:["#js","#css","#html"],
            ddn:"18/11/1975",
            photo:"https://picsum.photos/200/300?random=1",

        },

    ]

  }
  },
  components: {
    EquipeName
  }
}
</script>