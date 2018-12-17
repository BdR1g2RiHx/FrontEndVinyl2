<template>
  <div class="row no-gutters">
    <div class="col-12 col-md-10 offset-md-1 py-3 nav-mn">
      <div class="row no-gutters justify-content-between">
        <div class="col-auto">
          <nav>
            <ul>
              <li><router-link :to="{name: 'Home', params: {user}}">Главная</router-link></li>
              <li><router-link :to="{name: 'Catalog', params: {user}}">Каталог</router-link></li>
            </ul>
          </nav>
        </div>
        <div class="col-auto pt-1 d-md-none" style="font-size: 1.15rem; text-decoration: underline;" @click="show_sm_filter = !show_sm_filter">Фильтры</div>
      </div>

  </div>
  <div class="w-100"></div>
  <div class="col-12">
    <div class="row no-gutters">
      <div :class="{'d-none': !show_sm_filter}" class="col-6 col-md-3 d-md-block pr-3" style="font-size: 1.15rem">
        <!-- Блоки меню -->
        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_j = !show_j">
            <div class="row no-gutters">
              <div class="col-10">Жанр</div>
              <div class="col-2"><img :src="show_j ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_j">
            <div class="row no-gutters">
              <div class="col-12"><input id="1.1" type="checkbox"><label for="1.1">Rock'n'Roll</label></div>
              <div class="col-12 mt-2"><input id="1.2" type="checkbox"><label for="1.2">Blues</label></div>
              <div class="col-12 mt-2"><input id="1.3" type="checkbox"><label for="1.3">Classic</label></div>
              <div class="col-12 mt-2"><input id="1.4" type="checkbox"><label for="1.4">Disco</label></div>
            </div>
          </div>
        </div>

        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_c = !show_c">
            <div class="row no-gutters">
              <div class="col-10">Страна</div>
              <div class="col-2"><img :src="show_c ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_c"><div class="row no-gutters">
            <div class="col-12"><input id="2.1" type="checkbox"><label for="2.1">Канада</label></div>
            <div class="col-12 mt-2"><input id="2.2" type="checkbox"><label for="2.2">Англия</label></div>
            <div class="col-12 mt-2"><input id="2.3" type="checkbox"><label for="2.3">США</label></div>
            <div class="col-12 mt-2"><input id="2.4" type="checkbox"><label for="2.4">Франция</label></div></div>
          </div>
        </div>

        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_v_y = !show_v_y">
            <div class="row no-gutters">
              <div class="col-10">Год выпуска</div>
              <div class="col-2"><img :src="show_v_y ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_v_y"><div class="row no-gutters">
            <div class="row no-gutters">
              <div class="col-2">с</div>
              <div class="col-auto mr-2"><input type="number" min="1900" max="2030" value="2000"></div>
              <div class="col-2">г.</div>
              <div class="w-100"></div>
              <div class="col-2">до</div>
              <div class="col-auto mr-2"><input type="number" min="1900" max="2030" value="2000"></div>
              <div class="col-2">г.</div>
            </div></div>
          </div>
        </div>

        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_i_y = !show_i_y">
            <div class="row no-gutters">
              <div class="col-10">Год издания</div>
              <div class="col-2"><img :src="show_i_y ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_i_y"><div class="row no-gutters">
            <div class="row no-gutters">
              <div class="col-2">с</div>
              <div class="col-auto mr-2"><input type="number" min="1900" max="2030" value="2000"></div>
              <div class="col-2">г.</div>
              <div class="w-100"></div>
              <div class="col-2">до</div>
              <div class="col-auto mr-2"><input type="number" min="1900" max="2030" value="2000"></div>
              <div class="col-2">г.</div>
            </div></div>
          </div>
        </div>

        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_b = !show_b">
            <div class="row no-gutters">
              <div class="col-10">Группа</div>
              <div class="col-2"><img :src="show_b ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_b"><div class="row no-gutters">
            <div class="col-12"><input id="5.1" type="checkbox"><label for="5.1">A&M Record</label></div>
            <div class="col-12 mt-2"><input id="5.2" type="checkbox"><label for="5.2">Atlantic</label></div>
            <div class="col-12 mt-2"><input id="5.3" type="checkbox"><label for="5.3">Brain</label></div>
            <div class="col-12 mt-2"><input id="5.4" type="checkbox"><label for="5.4">Capitol</label></div></div>
          </div>
        </div>

        <div class="row no-gutters">
          <div class="col-12 my-3 pointer" @click="show_s = !show_s">
            <div class="row no-gutters">
              <div class="col-10">Состояние</div>
              <div class="col-2"><img :src="show_s ? 'img/filt_hide.png' : 'img/filt_show.png'" alt=""></div>
            </div>
          </div>
          <div class="col-12" v-show="show_s"><div class="row no-gutters">
            <div class="col-12"><input id="6.1" type="checkbox"><label for="6.1">Still Sealed</label></div>
            <div class="col-12 mt-2"><input id="6.2" type="checkbox"><label for="6.2">Mint</label></div>
            <div class="col-12 mt-2"><input id="6.3" type="checkbox"><label for="6.3">Near Mint</label></div>
            <div class="col-12 mt-2"><input id="6.4" type="checkbox"><label for="6.4">Excellent</label></div>
            <div class="col-12 mt-2"><input id="6.5" type="checkbox"><label for="6.5">Very Good</label></div>
            <div class="col-12 mt-2"><input id="6.6" type="checkbox"><label for="6.6">Good</label></div></div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="row no-gutters">
          <div class="col-12">
            <div class="row no-gutters justify-content-end">
              <div class="col-auto"><select name="" style="border: none; font-size: 1.05rem" id="sort">
                <option value="1">По популярности</option>
                <option value="2">По названию</option>
                <option value="3">По цене</option>
                <option value="4">По дате</option>
              </select></div>
            </div>  
          </div>

          <div class="col-12 mt-5">
            <div class="row no-gutters">
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
              <div class="col-12 col-md-4" :class="{'col-sm-6': !show_sm_filter, 'col-sm-12': show_sm_filter}">
                <app-product :user="user" :plate_id="123"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
          <div class="row no-gutters justify-content-end">
            <div class="col-12 col-sm-6 col-md-4">
              <div class="row no-gutters">
                <div class="col-1 pointer">
                  <img style="width: 100%" src="img/prev_page.png" @click="current_page > 1 ? refresh(current_page - 1) : {}" alt="">
                </div>
                <div class="col-10" style="text-align: center; font-size: 1.25rem">
                  <span class="pointer" v-if="pagination.first_page.show" @click="refresh(1)">1</span>
                  <span v-if="pagination.left_points.show">...</span>
                  
                  <span v-for="n in 5" class="pointer" :class="{'bold':current_page==pagination.center[n*2-1]}" style="margin: 3px;" v-if="pagination.center[(n-1)*2]" @click="refresh(pagination.center[n*2-1])">{{pagination.center[n*2-1]}}</span>
                  <span v-if="pagination.right_points.show">...</span>
                  <span class="pointer" v-if="pagination.late_page.show" @click="refresh(number_of_pages)">{{pagination.late_page.number}}</span>
                </div>
                <div class="col-1 pointer">
                  <img style="width: 100%" src="img/next_page.png" @click="current_page < number_of_pages ? refresh(current_page + 1) : {}" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
  import Product from './Home-product.vue';

  export default {
    data () {
      return {
      show_j: false, //показать жанры
      show_c: false, //показать страны
      show_v_y: false, //год выпуска
      show_i_y: false, //год издания
      show_b: false, //показать группы
      show_s: false, //показать состояния
      show_sm_filter: false, //показать фильтр при малом экране

      current_page: 1,
      number_of_pages: 20,

      pagination: { //для управления отображением пагинации
        first_page: {
          show: false,
          number: 1
        },
        left_points: {
          show: false
        },
        center:
          [false, 1, false, 2, false, 3, false, 4, false, 5],
        right_points: {
          show: false
        },
        late_page: {
          show: false,
          number: 1
        }
      },
      user: {},
      plates_id: [] //здесь в респонсе возвращаются id пластинок, соответствующих фильтрам
    }
  },
  components: {
    'app-product': Product,
  },
  methods: {
    refresh(n) {
      this.current_page = n;

      if (this.current_page > 3)
        this.pagination.first_page.show = true;
      else
        this.pagination.first_page.show = false;

      if (this.current_page > 4)
        this.pagination.left_points.show = true;
      else
        this.pagination.left_points.show = false;

      for (let i = this.current_page - 2, c=0; i<=this.current_page + 2; i++, c++)
        if (i > 0 && i <= this.number_of_pages)
        {
          this.pagination.center[2*c] = true;
          this.pagination.center[2*c+1] = i;
        }
        else {
          this.pagination.center[2*c] = false;
        }

      if (this.number_of_pages - this.current_page > 3)
        this.pagination.right_points.show = true;
      else
        this.pagination.right_points.show = false;

      if (this.number_of_pages - this.current_page > 2)
        {
          this.pagination.late_page.show = true;
          this.pagination.late_page.number = this.number_of_pages;
        }
        else {
          this.pagination.late_page.show = false;
        }
    }
  },
  created() {
    this.user = this.$route.params.user;
    this.refresh(1);
  }
}
</script>

<style lang="scss" scoped>
@import './../style/data.scss';
.p {
  text-align: right;
}
.pointer {
  cursor: pointer;
  font-family: 'Proxima Nova Rg';
}
.bold {
  font-weight: bold;
}
input[type='number'] {
  font-family: 'Proxima Nova Rg';
}

#pay {
  width: 100%;
  height: 50px;
  font-size: 32px;
  background: $dark;
  border: none;
  color: white;
}
#pay:hover {
  background: $light;
  color: $dark;
}
#pay:active {
  padding: 0 !important;
  border: 6px $dark solid;
}
</style>
