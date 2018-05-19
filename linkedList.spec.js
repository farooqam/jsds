'use strict';

describe('LinkedListNode Tests', function() {

    it('Returns the val property value', function() {
        var vals = [10, "hello", false];

        for(var i = 0; i < vals.length; i++){
            var node = new LinkedListNode(vals[i]);
            expect(node.getVal()).toBe(vals[i]);
        }
        
    });
});

describe('LinkedList Tests', function() {

    var list = null;

    beforeEach(function() {
        list = new LinkedList();
    });

    it('Adds the first node at the head of the list.', function() {
        var expectedValue = "bubba";
        list.add(expectedValue);
        expect(list.getHead().getVal()).toBe(expectedValue);
        expect(list.getHead().getNext()).toBeNull();
        expect(list.getLength()).toBe(1);
    });

    it('Adds multiple nodes to the list', function() {
        var inputs = [10, 20, 30];

        for(var i = 0; i < inputs.length; i++) {
            list.add(inputs[i]);
        }

        for(var i = 0; i < inputs.length; i++) {
            expect(list.getAt(i).getVal()).toBe(inputs[i]);
        }
        
        expect(list.getLength()).toBe(3);
    });
});
