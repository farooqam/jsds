'use strict';

describe('LinkedListNode Tests', function () {

    it('Returns the val property value', function () {
        var vals = [10, "hello", false];

        for (var i = 0; i < vals.length; i++) {
            var node = new LinkedListNode(vals[i]);
            expect(node.getVal()).toBe(vals[i]);
        }

    });
});

describe('LinkedList Tests', function () {

    var list = null;

    beforeEach(function () {
        list = new LinkedList();
    });

    describe('push() Tests', function () {

        it('Adds the first node at the head of the list.', function () {
            var expectedValue = "bubba";
            list.push(expectedValue);
            expect(list.getAt(0).getVal()).toBe(expectedValue);
            expect(list.getAt(0).getNext()).toBeNull();
        });

        it('Adds multiple nodes to the list', function () {
            var inputs = [10, 20, 30];

            inputs.forEach(function (val) {
                list.push(val);
            });

            for (var i = 0; i < inputs.length; i++) {
                expect(list.getAt(i).getVal()).toBe(inputs[i]);
            }
        });
    });


    describe('pop() Tests', function () {

        it('Should result in an empty list when called on a one node list', function () {
           list.push(10);
           var node = list.pop();
           
            expect(list.getLength()).toBe(0);
            expect(node.getVal()).toBe(10);
        });

        it('Throws error for an empty list', function () {
            try {
                list.pop();
                throw Error("Did not throw the expected exception.")                                
            }
            catch (ex) {
                expect(ex.name).toBe('InvalidOperation');
            }

        });

        it('Removes the last node from a multi-node list', function() {
            var inputs = [10, 20, 30, 40, 50];

            inputs.forEach(function (val) {
                list.push(val);
            });

            for(var i = 0; i < list.getLength(); i++) {
                var poppedNode = list.pop();
                expect(poppedNode.getVal()).toBe(inputs[inputs.length - i - 1]);
                expect(list.getLength()).toBe(inputs.length - i - 1)
            }
            

        });

    });


    describe('getLength() Tests', function () {

        it('Returns zero for an empty list', function () {
            expect(list.getLength()).toBe(0);
        });

        it('Returns the list length', function () {
            var inputs = [10, 20, 30];

            inputs.forEach(function (val) {
                list.push(val);
            });

            expect(list.getLength()).toBe(inputs.length);
        });
    });

    describe('getAt() Tests', function () {

        it('Returns the head node when given 0 index', function () {
            list.push("foo");
            expect(list.getAt(0).getVal()).toBe("foo");
        });

        it('Returns the node at the given index', function () {
            var inputs = [10, 20, 30];

            inputs.forEach(function (val) {
                list.push(val);
            });

            for (var i = 0; i < inputs.length; i++) {
                expect(list.getAt(i).getVal()).toBe(inputs[i]);
            }
        });

        it('Throws error for an empty list', function () {
            try {
                list.getAt(0);
                throw Error("Did not throw the expected exception.")                                
            }
            catch (ex) {
                expect(ex.name).toBe('InvalidOperation');
            }

        });

        it('Throws error when index is greater than list length', function () {
            var inputs = [10, 20, 30];

            inputs.forEach(function (val) {
                list.push(val);
            });

            try {
                list.getAt(4);
                throw Error("Did not throw the expected exception.")                                
            }
            catch (ex) {
                expect(ex.name).toBe('ArgumentOutOfRange');
            }
        });

        it('Throws error when index is negative', function () {
            var inputs = [10, 20, 30];

            inputs.forEach(function (val) {
                list.push(val);
            });

            try {
                list.getAt(-1);
                throw Error("Did not throw the expected exception.")                                
            }
            catch (ex) {
                expect(ex.name).toBe('ArgumentOutOfRange');
            }
        });
    });

    describe('reverse() tests', function() {

        it('Throws error when list is empty', function() {

            try {
                list.reverse();
                throw Error("Did not throw the expected exception.")                                
            }
            catch (ex) {
                expect(ex.name).toBe('InvalidOperation');
            }
        });

        it('Should reverse a single node list', function() {
            list.push(10);
            list.reverse();
            expect(list.getAt(0).getVal()).toBe(10);
        });

        it('Should reverse list with even number of nodes', function() {
            var inputs = [10, 20, 30, 40];

            inputs.forEach(function (val) {
                list.push(val);
            });

            list.reverse();

            for (var i = 0; i < inputs.length; i++) {
                expect(list.getAt(i).getVal()).toBe(inputs[inputs.length - 1 - i]);
            }
        });

        it('Should reverse list with odd number of nodes', function() {
            var inputs = [10, 20, 30, 40, 50];

            inputs.forEach(function (val) {
                list.push(val);
            });

            list.reverse();

            for (var i = 0; i < inputs.length; i++) {
                expect(list.getAt(i).getVal()).toBe(inputs[inputs.length - 1 - i]);
            }
        });
    });

    describe('insertAt() Tests', function() {

        it('Should throw when index is greater than list length', function() {
            try {
                list.insertAt(1);
                throw Error("Did not throw the expected exception.")                                
            }
            catch (ex) {
                expect(ex.name).toBe('ArgumentOutOfRange');
            }
        });

        it('Should throw when index is greater than list length', function() {
            try {
                list.push(1);
                list.push(2);
                list.insertAt(2);
                throw Error("Did not throw the expected exception.")                                
            }
            catch (ex) {
                expect(ex.name).toBe('ArgumentOutOfRange');
            }
        });

        it('Should throw when index is negative', function() {
            try {
                list.insertAt(-1);
                throw Error("Did not throw the expected exception.")                
            }
            catch (ex) {
                expect(ex.name).toBe('ArgumentOutOfRange');
            }
        });

        it('Should insert a new node when list is empty', function() {
            list.insertAt(0, "foo");
            expect(list.getLength()).toBe(1);
            expect(list.getAt(0).getVal()).toBe("foo");
        });

        it('Should insert a new node at the head of the list', function() {
            var inputs = ["foo", "bar", "baz"];

            inputs.forEach(function(val) {
                list.push(val);
            });

            list.insertAt(0, "bah");
            expect(list.getLength()).toBe(4);
            expect(list.getAt(0).getVal()).toBe("bah");            
            expect(list.getAt(1).getVal()).toBe("foo");
        });

        it('Should insert a new node before the node at index', function() {
            var inputs = ["foo", "bar", "baz"];

            inputs.forEach(function(val) {
                list.push(val);
            });

            list.insertAt(2, "bah");
            expect(list.getLength()).toBe(4);
            expect(list.getAt(2).getVal()).toBe("bah");            
            expect(list.getAt(3).getVal()).toBe("baz");
        });
    });

    describe('removeAt() Tests', function() {

        it('Should throw on an empty list', function() {
            try {
                list.removeAt(0);
                throw Error("Did not throw the expected exception.")                
            }
            catch (ex) {
                expect(ex.name).toBe('InvalidOperation');
            }
        });

        it('Should throw when index is greater than list length', function() {
            try {
                list.push(100);
                list.removeAt(1);
                throw Error("Did not throw the expected exception.")
            }
            catch (ex) {
                expect(ex.name).toBe('ArgumentOutOfRange');
            }
        });

        it('Should throw when index is negative', function() {
            try {
                list.push("foo");
                list.removeAt(-1);
                throw Error("Did not throw the expected exception.")                
            }
            catch (ex) {
                expect(ex.name).toBe('ArgumentOutOfRange');
            }
        });

        it('Should result in an empty list when called on a one node list', function() {
            list.push("foo");
            var removedNode = list.removeAt(0);

            expect(list.getLength()).toBe(0);
            expect(removedNode.getVal()).toBe("foo");
        });

        it('Should remove the last node', function() {
            var inputs = ["foo", "bar", "baz", "bah"];

            inputs.forEach(function(val) {
                list.push(val);
            });

            var removedNode = list.removeAt(3);
            expect(list.getLength()).toBe(3);
            expect(removedNode.getVal()).toBe("bah");
            expect(list.getAt(2).getVal()).toBe("baz");
            expect(list.getAt(2).getNext()).toBeNull();
        })

        it('Should remove the node at index', function() {
            
            var inputs = ["foo", "bar", "baz", "bah"];

            inputs.forEach(function(val) {
                list.push(val);
            });

            var removedNode = list.removeAt(2);

            expect(list.getLength()).toBe(3);
            expect(removedNode.getVal()).toBe("baz");
            expect(list.getAt(2).getVal()).toBe("bah");
            expect(list.getAt(1).getVal()).toBe("bar");
        });
    });
});
