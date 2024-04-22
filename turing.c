#include <stdio.h>
#include <string.h>

#define TAPE_LENGTH 100

typedef struct
{
    char state;
    char symbol;
    char new_state;
    char new_symbol;
    char direction;
} Transition;

Transition transitions[] = {
    {'0', 'D', '1', 'D', 'R'},
    {'1', 'C', '2', 'C', 'R'},
    {'2', 'E', '3', 'E', 'R'},
    {'3', 'G', '4', 'G', 'R'},
    {'4', 'B', '5', 'B', 'R'},
    {'5', 'P', '6', 'P', 'R'},
    {'6', 'F', '7', 'F', 'R'},
    {'7', 'I', '8', 'I', 'R'},
    {'8', 'R', '9', 'R', 'R'},
    {'9', 'M', 'A', 'M', 'R'},
    {'A', ' ', 'F', ' ', 'R'},
};

char tape[TAPE_LENGTH];

Transition *get_transition(char state, char symbol)
{
    for (int i = 0; i < sizeof(transitions) / sizeof(Transition); i++)
    {
        if (transitions[i].state == state && transitions[i].symbol == symbol)
        {
            return &transitions[i];
        }
    }
    return NULL;
}

void print_tape(int head_position)
{
    for (int i = 0; i < strlen(tape); i++)
    {
        if (i == head_position)
        {
            printf("[%c]", tape[i]);
        }
        else
        {
            printf(" %c ", tape[i]);
        }
    }
    printf("\n");
}

void run_turing_machine()
{
    int head_position = 0;
    char state = '0';

    while (state != 'F')
    {
        print_tape(head_position);
        Transition *transition = get_transition(state, tape[head_position]);
        if (transition == NULL)
        {
            printf("No transition found for state %c and symbol %c\n", state, tape[head_position]);
            return;
        }

        state = transition->new_state;
        tape[head_position] = transition->new_symbol;
        head_position += (transition->direction == 'R') ? 1 : -1;
    }
    print_tape(head_position);
}

int main()
{
    printf("Enter the input string: ");
    scanf("%s", tape);
    printf("Initial tape: %s\n", tape);
    run_turing_machine();
    printf("Final tape: %s\n", tape);
    return 0;
}
