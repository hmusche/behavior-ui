/*
---

name: Behavior.Slider.Modify

description: Behavior for creating an interactive slider that can update and
             modify the contents of elements with the value from the slider.

requires:
 - Behavior/Behavior
 - More/Object.Extras
 - Behavior-UI/Slider.Modify

provides: [Behavior.Slider.Modify]

...
*/
Behavior.addGlobalFilter('Slider.Modify', {
  defaults: {
    knob: '~.slider-knob',
    fill: '.slider-fill',
    startRange: 1
  },
  requireAs: {
    endRange: Number,
    initialStep: Number
  },
  returns: Slider.Modify,

  setup: function(element, api){
    // slideFill is optional
    var slideFill = api.get('fill') ? api.getElement('fill') : null;
    var knob = api.getElement('knob');
    var targets = api.getAs(Array, 'targets');

    if (!targets && targets.length) api.fail('Unable to find targets option.');

    // instantiate a new Slider.Modify instance.
    var slider = new Slider.Modify(
      element,
      knob,
      {
        steps: api.getAs(Number, 'steps'),
        range: [api.getAs(Number, 'startRange'), api.getAs(Number, 'endRange')],
        initialStep: api.getAs(Number, 'initialStep'),
        slideFill: slideFill,
        targets: targets
      }
    );
    api.onCleanup(slider.detach.bind(slider));

    return slider;
  }
});
