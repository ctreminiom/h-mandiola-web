export default function () {
    return [{
      title: 'Administration',
      to: "/dashboard/administration/",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: '',
    }, {
      title: 'Security',
      htmlBefore: '<i class="material-icons">security</i>',
      to: "/dashboard/security/"
    }, {
      title: 'Queries',
      htmlBefore: '<i class="material-icons">find_replace</i>',
      to: "/dashboard/queries/",
    }];
  }