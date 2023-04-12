<template>
  <v-sheet width="700" class="mx-auto">
    <v-form ref="form" class="py-16">
      <h1 class="py-16">{{ title }}</h1>
      <v-text-field
        v-model="titulo"
        :counter="10"
        :rules="titleRules"
        label="Titulo"
        required
      ></v-text-field>

      <v-select
        v-model="genero"
        :items="genres"
        :rules="[(v) => !!v || 'Gênero é obrigatório']"
        label="Escolha o gênero do seu livro"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[
          (v) => !!v || 'Você precisa aceitar os termos de uso para continuar!',
        ]"
        label="Concorda com os termos?"
        required
      ></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn color="success" class="mt-4" block @click="validate">
          Cadastrar
        </v-btn>

        <v-btn color="error" class="mt-4" block @click="reset">
          Limpar formulário
        </v-btn>

        <v-btn color="warning" class="mt-4" block @click="resetValidation">
          Limpar validação
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    title: "Form",
    titulo: "",
    valid: true,
    titleRules: [
      (v) => !!v || "O campo título é obrigatório",
      (v) => (v && v.length <= 50) || "O título deve menos de 50 caracteres",
      (v) => (v && v.length >= 5) || "O título deve ao menos 5 caracteres",
    ],
    genero: null,
    genres: ["Fantasia", "Ficção Científica", "Terror"],
    checkbox: false,
  }),
  mounted() {
    if (localStorage.titulo) {
      this.titulo = localStorage.titulo;
    }
    if (localStorage.genero) {
      this.genero = localStorage.genero;
    }
  },
  watch: {
    titulo(newTitulo) {
      localStorage.titulo = newTitulo;
    },
    genero(newGenero) {
      localStorage.genero = newGenero;
    },
  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        alert("Dados enviados com sucesso");
        localStorage.titulo = this.titulo;
        localStorage.genero = this.genero;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    storageData(token) {
      localStorage.setItem("authToken", token);
    },
  },
};
</script>
