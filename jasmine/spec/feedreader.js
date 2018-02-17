
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

    /*  expect(Array.from(document.body.classList).some(function(n){
        return n === 'menu-hidden';
      })).toBe(true); */

        expect(document.body.classList).toContain('menu-hidden');
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
      loadFeed(0, done) //wait for loadfeed to finish executing before checking content load-in

    });
    it('minimal entries in feed', function(){
      //  expect($('.feed > a')[0].className).toBe('entry-link'); Not as reliable, checks entire dom not feed container specifically.
      let entryContent = $('.feed .entry').length; //Check descendant of feed entries specifically
      console.log(entryContent);
      expect(entryContent).toBeGreaterThan(0);;
    });

  });

  describe('New Feed Selection', function() {
    /* This test ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */
    let sameContent; // define outside
    beforeEach(function(done){
      loadFeed(0, function() {// execute first loadFeed index id to retrieve initial content data
        sameContent = $('.feed').html(); //retrieval and storing
        console.log(sameContent); //see previous content remain stored
        loadFeed(1, done); //now execute next index ID to flow in new content
      });
    });

    //compare the first content load with second to check if content actually did change
    it('content actually changes', function(){
      console.log($('.feed').html()); // see new content load in
      expect($('.feed').html()).not.toEqual(sameContent);
    });
  });



}());
