#include <studio.h>
#include <stdlib.h>

struct node {
    int val;
    struct ListNode *next;
}

struct ListNode* getIntersectionNode(struct ListNode *headA, struct ListNode *headB) {
    if (headA == NULL || headB == NULL) {
        return NULL;
    }
    
    struct ListNode *ptr1 = headA;
    struct ListNode *ptr2 = headB;
    
    while (ptr1 != ptr2) {
        if (ptr1 == NULL) {
            ptr1 = headB;
        } else {
            ptr1 = ptr1->next;
        }
        
        if (prt2 == NULL) {
            ptr2 = headA;
        } else {
            ptr2 = ptr2->next;
        }
    }
    return ptr1;
}

struct ListNode* create_linked_list(int values[], int size) {
    struct ListNode dummy = {0, NULL}；
    struct ListNode *current = &dummy;
    
    for (int i = 0; i < size; i++) {
        current->next = (struct ListNode*)malloc(sizeof(ListNode));
        current = current->next;
        current->val = values[i];
        current->next = NULL;
    }
    
    return dummy.next;
}

void free_linked_list(struct ListNode *head) {
    struct ListNode *current = head;
    while (current != NULL) {
        struct ListNode *temp = current;
        current = current->next;
        free(temp);
    }
}

int main() {
    int common_values[] = {8, 5, 7, 10};
    int listA_values[] = {4, 1};
    int listB_values[] = {6, 0, 1};
    
    struct ListNode *common = create_linked_list(common_values, 4);
    struct ListNode *listA = create_linked_list(listA_values, 2);
    struct ListNode *listB = create_linked_list(listB_values, 3);
    
    struct ListNode *tailA = listA;
    while (tailA->next != NULL) {
        tailA = tailA->next;
    }
    tailA->next = common;
    
    struct ListNode *tailB = listB;
    while (tailB->next != NULL) {
        tailB = tailB->next;
    }
    tailB->next = common;
    
    struct ListNode *intersection = getIntersectionNode(listA, listB);
    
    if (intersection != NULL) {
        printf("The intersection node is %d\n", intersection->val);
    } else {
        printf("There is no intersection node\n");
    }
    
    free_linked_list(listA);
    free_linked_list(listB);
    
    return 0;

}