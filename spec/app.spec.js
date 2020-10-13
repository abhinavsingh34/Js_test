describe("Transform functions", function() {
    var output = [{
        _id:10,
        thumbnail: 'http://mps.com./assets/img.png'
    }];

    it("modalhide", function() {
        const elementMock = {
            style: {
                display:'none'
            }
          };    
        
          spyOn(document, 'getElementById').and.returnValue(elementMock);
        
          expect(document.getElementById('condition').style.display).toBe('none');
          expect(modalhide()).toBeUndefined();

    });

    it("modalshow", function() {
      
        var corosal = "myTest";
        const elementMock = {
            style: {
                display:'block'
            }
          };    
          spyOn(document, 'getElementById').and.returnValue(elementMock);
          
          expect(document.getElementById('condition').style.display).toBe('block');
          const elem = {
            innerHTML: 'MyTest'
          }          
        
          expect(document.getElementById('cor').innerHTML).toEqual(undefined);
          expect(modalshow(10)).toBeUndefined();

    });
});