
var CustomerActionCreators = require('../actions/CustomerActionCreators');

module.exports = {

  getAllCustomers: function() {
    var list = [
      { image: './images/aurea.png', title: 'Aurea' },
      { image: './images/crossover.png', title: 'Crossover' },
      { image: './images/gensym.png', title: 'Gensym' },
      { image: './images/ignite.png', title: 'Ignite' },
      { image: './images/tenrox.png', title: 'Tenrox' },
      { image: './images/versata.png', title: 'Versata' }
    ];

    CustomerActionCreators.receiveAll(list.map(function (c, i) {
      c.id = i;
      return c;
    }));
  }

};
