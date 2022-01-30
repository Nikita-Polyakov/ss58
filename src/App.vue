<template>
  <div id="app">
    <label class="input-row">
      <span>SS58 format:</span>
      <input type="number" v-model="ss58format" min="0"/>
    </label>
    <label class="input-row">
      <input type="text" v-model="input" />
      <button type="button" @click="addAddress">Add Sora address</button>
    </label>

    <table>
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Sora address
          </th>
          <th>
            Encoded with ss58
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in formatted" :key="item.sora">
          <td>{{ index + 1 }}</td>
          <td>{{ item.sora }}</td>
          <td>{{ item.external }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';

const transfers = [
  'cnRWW1PFEVFwSPxR26GAwzAdEd9wTPUMb2mo84UFdMi9TASXn',
  'cnV2oZJrm67mYwxUXVGJJeTemkau3exVznMxk3WU3i86ef5ch',
  'cnRiXXNPdLLghaxvhe17UMMsnjuFTBuNvyCsKeA6oTi6P6LB6',
  'cnVheACNHen8SaVVgDRFa9BzB4W9H1noLUdV27QMXpMxsKHBo',
  'cnTYXuFbkjYwkAWUVbGB97SuULPYrNoAg3HC4oPJhFAmQVXre',
  'cnWoDnNXgnbe1rirD1ZRL9QXPqyvZvHS32AhPbipjBuNgwfnS',
  'cnSwnahPZtNeESeiRiyFp3ESHL9DakjsYZN98gX7bxxH3nNyV',
  'cnVwWkJxVGA29AidvWtYaNGAgojjd6FZGLbg68YHtNY2ByDo4',
  'cnTmFiUgUqwMEUAw6hNAfmJcFUKNF88K5hjXSK94XN5t7ZuST',
  'cnT5RyC7g6V8LQ2LusgevB59cNkW2Fm2Xm9qvJhkp3WtgqmT8',
  'cnXEyGDPhDkDwrWuzbFPh1BbUwQDeuRXx3bMheZcRz14Vq2Dr',
  'cnSBiZrGPgyoKGkSovqRGcfsLSBWBE7DHEYAGDg22A6wXt6hs',
  'cnSe6GK5EGYtD963EXN9UfFK1qmB4XunLMnngsoNYycPACNrZ',
  'cnSr6xH3VLxccoN3VVULFpS4Vrb9dXuBW6J3WstqhR66H9icp',
  'cnUG5YWfR8iNkL6msU3U9BL8vYS76Z2jiz4649MmdU6Dq7WYR',
  'cnWoKcWrBubrJgMh4fCqabbVo85HHYJDnS9ZmVbS6bqEDNLc6',
  'cnUvzULxmBi28jpfFVVBQXLdnY8kFwJc96t4n985xpX1AzfeB',
  'cnU7UjbG5HTPDwEkMn1KaETrwDGS2nCSuMzrSe6sFXB2SfMrv',
  'cnWtZSJUAVd4ZtqnkhbeCqoxnTEZQgapFb8vm2ixRZ5eYSFoc',
  'cnX6yWat3jy7wHnDyGLw65DMTM4Gp3X6BCjvasdH26GCjCyWs',
  'cnSN33HpCwZqxQ4iVf3voVUJ9jx9wPULVMXw6iVgPgkeneNtM',
  'cnSGrAJBb3ap5FKJuQJaocYuABrHMhtpEfzdUL5v9do25efsd',
  'cnUAzBZL9dJ2QK2ofMZx4yduPJkAhsQAQPbFCdJJxdF8qyAvw',
  'cnWRKitqxXoNUYp1Bhp8W7AizYpMEev1E9qtT4HfPtkbHFYUV',
  'cnTZv2S7CeEr23TbMAenHzyFUmUcVP5fEq3gEne6vuV7dtXHn',
  'cnWFadHK6HnFQP9iKP7cDDi1jf6y4voPyzhizyAzJedqAoNoB'
]

export default {
  name: 'App',
  data: () =>  ({
    input: '',
    addresses: [],
    ss58format: 2,
  }),
  computed: {
    allAddresses() {
      return [...transfers, ...this.addresses];
    },
    formatted() {
      return this.allAddresses.map(address => ({
        sora: address,
        external: encodeAddress(decodeAddress(address, false), this.ss58format),
      }))
    }
  },
  methods: {
    addAddress() {
      if (decodeAddress(this.input, false)) {
        this.addresses.push(this.input);
      }
      this.input = '';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}

table td,
table th {
  text-align: left;
  border: 1px solid black;
  padding: 10px;
}

.input-row {
  margin: 10px 0;
}
</style>
