const posthogConfig = {
  routes: {
    '/': {
      events: {
        page_view: {},
        button_clicked: {
          properties: { buttonName: 'Hero Button' },
        },
      },
    },
    '/about': {
      events: {
        page_view: { properties: { aboutSection: 'Intro' } },
        form_submitted: {},
      },
    },
  },
};

export default posthogConfig;
