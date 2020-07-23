<template>
  <div>
    <SongsList />
  </div>
</template> 

<script>
import SongsList from "../../SongsList/index";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { SongsList },
  mounted() {
   
  },
};
</script>

<style lang="scss" scoped>
.rec {
  .rec_title {
    padding: 20px 0;
    > div {
      height: 18px;
      line-height: 18px;
      border-left: 2px solid #c4483b;
      border-top: 2px solid transparent;
      padding-left: 10px;
      font-size: 16px;
    }
  }
  .rec_content {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 33.33%;
        padding: 0 2px;
        .remd_li {
          position: relative;
          img {
            border-radius: 6px;
            width: 100%;
          }
          > span {
            color: aliceblue;
            font-size: 12px;
            position: absolute;
            right: 4px;
            top: 2px;
            height: 20px;
            line-height: 20px;

            display: flex;
            > i {
              padding-right: 2px;
              display: block;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
}
.news_music {
  .news_music_title {
    padding: 20px 0;
    > div {
      height: 18px;
      line-height: 18px;
      border-left: 2px solid #c4483b;
      border-top: 2px solid transparent;
      padding-left: 10px;
      font-size: 16px;
    }
  }
}
</style>