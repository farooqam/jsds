'use strict';

function LinkedListNode(val) {
    this._val = val;
    this._next = null;
}

LinkedListNode.prototype = (function () {

    return {
        constructor: LinkedListNode,

        getVal: function () {
            return this._val;
        },

        setVal: function (val) {
            this._val = val;
        },

        getNext: function () {
            return this._next;
        },

        setNext: function (node) {
            this._next = node;
        }

    }
})();

function LinkedList() {

    this._head = null;
    this._length = 0;

    this._incrementLength = function () {
        this._length += 1;
    };

    this._decrementLength = function () {
        this._length -= 1;
    };

    this._getHead = function () {
        return this._head;
    };
}

LinkedList.prototype = (function () {

    return {
        constructor: LinkedList,

        push: function (val) {
            var newNode = new LinkedListNode(val);

            if (this.getLength() === 0) {
                this._head = newNode;
            }
            else {
                var currentNode = this._getHead();

                while (currentNode.getNext() != null) {
                    currentNode = currentNode.getNext();
                }

                currentNode.setNext(newNode);
            }

            this._incrementLength();
        },

        pop: function () {
            if (this.getLength() === 0) {
                throw {
                    'name': 'InvalidOperation',
                    'message': 'Cannot call this function on an empty list.'
                }
            }

            var poppedNode = this.getAt(this.getLength() - 1);;

            if (this.getLength() === 1) {
                this._head = null;
            }
            else {
                var newLastNode = this.getAt(this.getLength() - 2);
                newLastNode.setNext(null);
            }

            this._decrementLength();

            return poppedNode;
        },

        getLength: function () {
            return this._length;
        },

        getAt: function (index) {
            if (this.getLength() === 0) {
                throw {
                    'name': 'InvalidOperation',
                    'message': 'Cannot call this function on an empty list.'
                }
            }

            if (index > this.getLength() - 1 || index < 0) {
                throw {
                    'name': 'ArgumentOutOfRange',
                    'message': 'Index is out of range.'
                }
            }

            var currentNode = this._getHead();

            for (var i = 0; i < index; i++) {
                currentNode = currentNode.getNext();
            }

            return currentNode;
        },

        reverse: function (index) {
            if (this.getLength() === 0) {
                throw {
                    'name': 'InvalidOperation',
                    'message': 'Cannot call this function on an empty list.'
                }
            }

            if (this.getLength() === 1) {
                return this._getHead();
            }

            var headIndex = 0;
            var tailIndex = this.getLength() - 1;

            while (headIndex < tailIndex) {
                var currentHeadNode = this.getAt(headIndex);
                var currentTailNode = this.getAt(tailIndex);
                var tempVal = currentHeadNode.getVal();

                currentHeadNode.setVal(currentTailNode.getVal());
                currentTailNode.setVal(tempVal);
                headIndex++;
                tailIndex--;
            }
        },

        insertAt: function (index, val) {

            if(index < 0) {
                throw {
                    'name': 'ArgumentOutOfRange',
                    'message': 'Index is out of range.'
                }
            }

            if (this.getLength() === 0 && index > 0) {
                throw {
                    'name': 'ArgumentOutOfRange',
                    'message': 'Index is out of range.'
                }
            }

            if (this.getLength() > 0 && index > this.getLength() - 1) {
                throw {
                    'name': 'ArgumentOutOfRange',
                    'message': 'Index is out of range.'
                }
            }

            if (this.getLength() === 0) {
                this.push(val);
                return;
            }

            var indexNodeBefore = index - 1;

            if (indexNodeBefore < 0) {
                var tempNode = this._head;
                this._head = new LinkedListNode(val);
                this._head.setNext(tempNode);
                this._incrementLength();
                return;
            }
            else {
                var nodeBefore = this.getAt(indexNodeBefore);
                var tempNode = nodeBefore.getNext();
                var newNode = new LinkedListNode(val);
                newNode.setNext(tempNode);
                nodeBefore.setNext(newNode);
            }

            this._incrementLength();
        },

        removeAt: function(index) {

            if(this.getLength() === 0) {
                throw {
                    'name': 'InvalidOperation',
                    'message': 'Cannot call this function on an empty list.'
                }
            }

            if (index < 0) {
                throw {
                    'name': 'ArgumentOutOfRange',
                    'message': 'Index is out of range.'
                }
            }

            if (index > this.getLength() - 1) {
                throw {
                    'name': 'ArgumentOutOfRange',
                    'message': 'Index is out of range.'
                }
            }

            if(this.getLength() === 1 || index === this.getLength() - 1){
                return this.pop();
            }

            var indexNodeBefore = index - 1;
            var nodeBefore = this.getAt(indexNodeBefore);
            var nodeToDelete = nodeBefore.getNext();
            nodeBefore.setNext(nodeToDelete.getNext());
            this._decrementLength();
            return nodeToDelete;
        }
    }
})();