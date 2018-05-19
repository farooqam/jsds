var LinkedListNode = (function () {

    function LinkedListNode(val) {
        this._val = val;
        this._next = null;
    }

    LinkedListNode.prototype.getVal = function () {
        return this._val;
    }

    LinkedListNode.prototype.getNext = function () {
        return this._next;
    }

    LinkedListNode.prototype.setNext = function (node) {
        this._next = node;
    }

    return LinkedListNode;
})();

'use strict';

var LinkedList = (function () {

    function LinkedList() {
        this._length = 0;
    }

    LinkedList.prototype._incrementLength = function () {
        this._length += 1;
    }

    LinkedList.prototype.add = function (val) {
        var newNode = new LinkedListNode(val);

        if (this.getLength() === 0) {
            this._head = newNode;
        }
        else {
            var currentNode = this.getHead();

            while (currentNode.getNext() != null) {
                currentNode = currentNode.getNext();
            }

            currentNode.setNext(newNode);
        }

        this._incrementLength();
    };
    LinkedList.prototype.getLength = function() {
        return this._length;
    }
    
    LinkedList.prototype.getHead = function () {
        return this._head;
    }

    LinkedList.prototype.getAt = function (index) {
        if (this.getLength() === 0) {
            throw 'Cannot call this function on an empty list.';
        }

        if (index > this.getLength() - 1) {
            throw 'Index is out of range.'
        }

        var currentNode = this.getHead();

        for (var i = 0; i < index; i++){
            currentNode = currentNode.getNext();
        }

        return currentNode;
    }

    return LinkedList;
})();