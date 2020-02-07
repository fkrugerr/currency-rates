import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import { path, join, keys, map } from 'rambda';

import restApi from '../api';

Vue.use(Vuex);

const currencies = ['EUR', 'USD', 'GBP', 'CHF', 'JPY', 'KRW'];

const initialState = {
  date: moment().format('YYYY-MM-DD'),
  currencies,
  base: currencies[0],
  selected: [currencies[1]],
  rates: null,
  error: null,
}

export default new Vuex.Store({
  state: {
    ...initialState,
  },
  getters: {
    currencies: state => state.currencies,
    filteredData: state => ({
      date: state.date,
      base: state.base,
      selected: state.selected,
    }),
    rates: state => state.rates,
    error: state => state.error,
  },
  mutations: {
    setData(state, { type, data }) {
      state[type] = data;
    },
  },
  actions: {
    updateDate: ({ commit }, data) => commit('setData', {
      type: 'date',
      data: moment(data).format('YYYY-MM-DD'),
    }),
    updateSelected: ({ commit }, data) => commit('setData', {
      type: 'selected',
      data,
    }),
    updateBase: ({ commit }, data) => commit('setData', {
      type: 'base',
      data,
    }),
    async fetchRates({ commit, getters }) {
      commit('setData', {
        type: 'error',
        data: null,
      })
      const res = await restApi(
        path('filteredData.date', getters),
        {
          base: path('filteredData.base', getters),
          symbols: join(',', path('filteredData.selected', getters)),
        }
      );
      if (res.error) {
        commit('setData', {
          type: 'rates',
          data: null,
        });
        commit('setData', {
          type: 'error',
          data: path('error.message', res),
        });
      } else {
        const { rates, ...rest } = res;
        commit('setData', {
          type: 'rates',
          data: {
            ...rest,
            rates: map(
              key => ({
                currency: key,
                value: rates[key],
              }),
              keys(rates)
            ),
          },
        });
      }
    }
  },
});