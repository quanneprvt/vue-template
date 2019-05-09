<template>
    <v-container grid-list-xl>
        <v-layout wrap>
            <v-flex
            v-for="elevation in elevations"
            :key="elevation"
            md3
            class="thumb-item"
            >
            <v-sheet
                class="mx-auto"
                height="10vw"
                width="10vw"
            ></v-sheet>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'SheetHeader',
    data() {
    return {
      elevations: [6, 12, 18],
    }
  }
}
</script>


<style>
.thumb-item{
  margin: auto;
}
</style>
