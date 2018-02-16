
$(function() {

  describe('RSS Feeds', function() {
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* loops through each feed
    * in the allFeeds object and ensures it has a URL defined
    * and that the URL is not empty.
    */
    it('url is available', function() {
      allFeeds.forEach(function(url) {
        expect(url.url).toBeDefined();
        expect(url.url.length).not.toBe(0);
      });
    });



    /* loops through each feed
    * in the allFeeds object and ensures it has a name defined
    * and that the name is not empty.
    */
    it('name is available', function() {
      allFeeds.forEach(function(url) {
        expect(url.name).toBeDefined();
        expect(url.name.length).not.toBe(0);
      });
    });

  });





  describe('the menu', function() {
    /* This test ensures the menu element is
    * hidden by default.
    */
    it('Menu is Hidden', function() {
      //also could do Array.from(document.body.classList)[0].toBe('menu-hidden'); less efficient
      expect(Array.from(document.body.classList).some(function(n){
        return n === 'menu-hidden';
      })).toBe(true);
    });
    /* This test ensures the menu changes
    * visibility when the menu icon is clicked; does the menu display when
    * clicked and does it hide when clicked again.
    */
    it('Menu is Clicked', function() {
      $('.menu-icon-link').click();
      expect(Array.from(document.body.classList).some(function(n){ //runs through classlist to search for the menu hidden class on any of the index
        return n === 'menu-hidden';
      })).not.toBe(true);
      $('.menu-icon-link').click();
      expect(Array.from(document.body.classList).some(function(n){
        return n === 'menu-hidden';
      })).not.toBe(false);
    });
  });





  describe('Initial entries', function() {
    /* This test ensures when the loadFeed
    * function is called and completes its work, there is at least
    * a single .entry element within the .feed container.
    * loadFeed() is asynchronous
    */
    beforeEach(function(done){
      loadFeed(0, function(){ //wait for loadfeed to finish executing before checking content load-in
        done();
      });
    });
    it('minimal entries in feed', function(done){
      //  expect($('.feed > a')[0].className).toBe('entry-link'); Not as reliable
      expect(document.getElementsByClassName('entry').length).toBeGreaterThan(0);
      done();
    });

  });




  describe('New Feed Selection', function() {
    /* This test ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */
    let sameContent; // define outside
    beforeEach(function(done){
      loadFeed(0, function() {// execute first loadFeed index id to retrieve initial content data
        sameContent = document.getElementsByClassName('entry')[0].firstElementChild //retrieval and storing
        loadFeed(1, done); //now execute next index ID to flow in new content
      });
    });


    it('content actually changes', function(done){ //compare the first content load with second to check if content actually did change
      expect(document.getElementsByClassName('entry')[0].firstElementChild === sameContent).not.toBe(true);
      done();
    });
  });



}());
